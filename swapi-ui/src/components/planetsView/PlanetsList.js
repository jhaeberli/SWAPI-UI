import _ from 'lodash'
import React from 'react'
import { Table, Pagination } from 'semantic-ui-react'
import { SET_ACTIVE_PAGE } from '../../action-creators';
import { connect } from "react-redux";

const PlanetsList = ({ loading, list, dataSet }) => {

    const [state, dispatch] = React.useReducer(exampleReducer, {
        column: null,
        data: dataSet.list,
        direction: null,
        activePage: 5
    })

    const { column, data, direction, activePage } = state

    const onChange = (e, pageInfo) => {
        console.log('hola1');
        this.props.dispatch("SET_ACTIVE_PAGE", pageInfo.activePage);
        console.log('hola2');
    };

    return (
        <Table sortable celled collapsing color={'red'}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        sorted={column === 'name' ? direction : null}
                        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                    >
                        Name
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'climate' ? direction : null}
                        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'climate' })}
                    >
                        Climate
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'population' ? direction : null}
                        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'population' })}
                    >
                        Population
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map(({ climate, population, name }) => (
                    <Table.Row key={name}>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{climate}</Table.Cell>
                        <Table.Cell>{population}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>

            <Pagination
                totalPages={6}
                activePage={activePage}
                onPageChange={onChange}
            />
        </Table>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        list: state.list,
        activePage: state.activePage
    }
};

const mapDispatchToProps = {
    setActivePage: SET_ACTIVE_PAGE
};

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(PlanetsList);

function exampleReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: state.data.slice().reverse(),
                    direction:
                        state.direction === 'ascending' ? 'descending' : 'ascending',
                }
            }

            return {
                column: action.column,
                data: _.sortBy(state.data, [action.column]),
                direction: 'ascending',
            }
        default:
            throw new Error()
    }
}
