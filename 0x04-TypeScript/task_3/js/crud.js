// eslint-disable-next-line require-jsdoc
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

// eslint-disable-next-line require-jsdoc
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

// eslint-disable-next-line require-jsdoc
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
