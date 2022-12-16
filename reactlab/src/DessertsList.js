function DessertsList(props) {
  const itemsInfo = props.data
    .filter((e) => e.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((e) => {
    const data = `${e.name} - ${e.calories}`
    return (
      <li>{ data }</li>
    )
  })
  return(
  <ul>
      {itemsInfo}
    </ul>);
}

export default DessertsList;
