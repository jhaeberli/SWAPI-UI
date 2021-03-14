import { SET_ACTIVE_PAGE, SET_LIST } from './action-creators'
import { actionTypes } from './utils/constants'

// describe('getPlanetsAction', () => {
//     it('should create an action to getPlanets', () => {
//         const activePage = 1
//         const expectedAction = {
//             type: actionTypes.SET_LOADING,
//             activePage
//         }
//         expect(SET_ACTIVE_PAGE(activePage)).toEqual(expectedAction)
//     })
// })

describe('setListAction', () => {
    it('should create an action to set the list of Planets', () => {
        const list = []
        const column = 'name'
        const direction = 'ascending'

        const setList = () => ( SET_LIST(list, column, direction))

        const expectedAction = {
            type: actionTypes.SET_LIST,
            list,
            column,
            direction
        }

        const obj = setList()

        expect(obj).toEqual(expectedAction)
    })
})