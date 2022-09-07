import React from 'react'

export default class ItemForm extends React.Component{

  constructor()
  {
    super()

    this.state={
        itemarray:[],
        status:""
    }
  }


componentDidMount()
{
     fetch("http://localhost:4500/getitems")
     .then(res=>res.json())
     .then(data=>this.setState({itemarray:data}))
      
    
}




  render()
  {

    var itemid,itemname,price





    const myformui=<div>
        Enter Item Id<br/>
        <input type='text'  data-testid="itemid" onChange={(e)=>{
itemid=e.target.value

        }}/><br/>
        Enter Item Name <br/>
        <input type='text' data-testid="itemname"
         onChange={(e)=>itemname=e.target.value}
        /><br/>
        Enter Price <br/>
        <input type='text' 
        data-testid="itemprice"
     onChange={(e)=>price=e.target.value}

        /><br/>
     <button
     
     onClick={()=>{
        var itemobj={
            itemId:itemid,
            itemName:itemname,
            price:price
        }

   const requestOptions={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(itemobj)
   }

        fetch('http://localhost:4500/saveitems',requestOptions)
        .then((res)=>{
            if(res.status===200)
            {
           console.log("item added successfully")
 //        window.location.reload(false)
           this.setState({status:"item added successfully"})
            }
        })
        this.setState({})
     }
    
    }
     
     >Save</button>
<h3 data-testid="statusmessage">
Item added successfully
  </h3>
    </div>

    return<div>
        <h1>Items Available</h1>

        {
            this.state.itemarray.map((e)=><li key={e.itemId}>{e.itemName} {e.price}</li>)
        }

         {myformui}
    </div>
  }

}