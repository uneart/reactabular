Reactabular comes with search helpers. It consists of search algorithms that can be applied to the data. Just like with sorting, you have to apply it to the data just before rendering. A column is considered searchable in case it has a unique `property` defined.

```react
<SearchTable />
```

```code
lang: jsx
---
import React from 'react';
import { Table, search } from 'reactabular';
import { Search } from './helpers';

class SearchTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: {},
      columns: [
        {
          header: {
            label: 'Name'
          },
          cell: {
            property: 'name'
          }
        },
        {
          header: {
            label: 'Age'
          },
          cell: {
            property: 'age'
          }
        }
      ],
      data: [
        {
          id: 100,
          name: 'Adam',
          age: 12
        },
        {
          id: 101,
          name: 'Brian',
          age: 7
        },
        {
          id: 102,
          name: 'Jake',
          age: 88
        },
        {
          id: 103,
          name: 'Jill',
          age: 50
        }
      ]
    };
  }
  render() {
    const { data, columns, query } = this.state;
    let searchedData = search.multipleColumns({ data, columns, query });

    return (
      <div>
        <div className="search-container">
          <span>Search</span>
          <Search
            columns={columns}
            data={data}
            onChange={query => this.setState({ query })}
          />
        </div>
        <Table columns={columns} data={searchedData} rowKey="id">
          <Table.Header />

          <Table.Body />
        </Table>
      </div>
    );
  }
}
```

> You can find that `Search` helper from `docs/helpers`. It's not included in the core distribution.
