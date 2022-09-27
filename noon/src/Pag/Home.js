import React from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios';
function Home(){
  const baseUrl ='http://api.weatherstack.com/current?access_key=48bcd1a88c1f0c17cd9ba191e59168bf&query=Sydney'
    axios({
      method: 'get',
      url: `${baseUrl}`,
    }).then((response) => {
      console.log(response.data);
      console.log(response.data.location.name)
    });
  const TableExampleSelectableInvertedRow = ()=>{
    
  } 
    return(
    <Table celled inverted selectable >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>city</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell textAlign='right'>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell textAlign='right'>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell textAlign='right'>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
export default Home
