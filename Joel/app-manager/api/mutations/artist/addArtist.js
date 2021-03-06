import { updateArtistMutation, validateArtist } from 'mutations-group'

import { validateArtist } from 'mutations-validation'

import { checkUserRequest } from 'mutations-authorization'


// @method Artist.update update fields of an existing artist
export const updateArtist = new ValidatedMethod({
  name: 'Artist.update',
  // ...

  validate({ artistId, doc }) {
    validateArtist({ artistId, doc })
  },

  run({ artistId, doc }) {
    // Get artist
    const { artist } = checkUserRequest(
      {
        artistId,
        userId: this.userId,
      },
      { allowAdminOnly: true }
    )

    updateArtistMutation({ artist, doc })
  },
})
