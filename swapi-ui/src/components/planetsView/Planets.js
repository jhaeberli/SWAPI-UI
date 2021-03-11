import React from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import '../../App.css';
import { Table, Pagination, Button, Container, Loader, Header } from 'semantic-ui-react'
import { SET_ACTIVE_PAGE, SET_LIST } from '../../action-creators';

const Planets = ({ setActivePage, setList, loading, list, activePage, column, direction }) => {

    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
    };

    const sortTable = (columna) => {
        if (column === columna) {
            setList(list.slice().reverse(), columna, direction === 'ascending' ? 'descending' : 'ascending');
        }
        else {
            setList(_.sortBy(list, columna), columna, 'ascending');
        }
    }

    return (
        <div>
            <Container className="centered">
                <div className="spacing">
                    <Header as='h2'>SWAPI-UI</Header>
                </div>

                <div className="spacing">
                    <Header as='h3'>React app based on The Star Wars API</Header>
                </div>

                <div className="spacing">
                    <Button primary onClick={() => setActivePage(1)}>Get Planets</Button>
                </div>

                {loading &&
                    <div>
                        <Loader size='massive' active>Loading</Loader>
                    </div>
                }

                {!loading &&
                    <Table sortable celled color={'red'}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    sorted={column === 'name' ? direction : null}
                                    onClick={() => sortTable('name')}
                                >
                                    Name
                        </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'climate' ? direction : null}
                                    onClick={() => sortTable('climate')}
                                >
                                    Climate
                        </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'population' ? direction : null}
                                    onClick={() => sortTable('population')}
                                >
                                    Population
                        </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {list.map(({ climate, population, name }) => (
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
                }
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        list: state.list,
        activePage: state.activePage,
        column: state.column,
        direction: state.direction
    }
};

const mapDispatchToProps = {
    setActivePage: SET_ACTIVE_PAGE,
    setList: SET_LIST
};

export { Planets };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planets);
