import React from 'react';

export default function (
  sortingColumns,
  onSort = () => {},
  header
) {
  const Sort = ({ property }) => {
    const columns = this.state[sortingColumns] || [];
    const index = columns.map(c => c.property).indexOf(property);
    let headerClass = '';

    if (index >= 0) {
      headerClass = `sort-${columns[index].sort}`;
    }

    return (
      <div
        className={headerClass}
        onClick={() => onSort(property)}
      >
        {header}
      </div>
    );
  };
  Sort.propTypes = {
    property: React.PropTypes.string.isRequired,
  };

  return Sort;
}