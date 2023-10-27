export const Reducer=(state= [],action)=>{
  switch (action.type) {
    case 'Add_Product':
      return [...state,action.value];
      case "Edit_Product":
      return state.map(item => {
        if (action.id === item.id) {
          return { ...item, ...action.update }
        } else {
          return item
        }
      })
    case 'Remove_Product':
      return state.filter(item=>item.id !== action.id)
    default:
      return state;
  }
}

