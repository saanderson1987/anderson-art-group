const JobList = props => {
  const {data} = props;
  if (!data.resource) data.resource = Job;

  return (
    <List data={data}>

      <ListItem itemName={props.item.name}>
        <ItemDetail column='po_num' detailName='PO #'/>
        <JobOrderList parentId={props.itemId}/>
      </ListItem>

      <NewItemModal
        parent={{id: parentId, column: 'company_id'}}
        data={data}
        itemTypeName='Job'
      >
        <NewItemDetail columName: 'name'/>
        <NewItemDetail columName: 'po_num' detailName='PO #'/>
      </NewItemModal>

    </List>
  );
}
