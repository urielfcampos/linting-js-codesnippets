return tbody(
    for (var i = 0; i < numrows; i++) {
        ObjectRow()
    } 
)

var rows = [];
for (var i = 0; i < numrows; i++) {
    rows.push(ObjectRow());
}
return tbody(rows);

var rows = [];
for (var i = 0; i < numrows; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>;