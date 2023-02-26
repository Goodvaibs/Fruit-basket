var itemList = [
    {
        id:1,
        name:'A',
        price:50,
        specialoffer:true,
        offer3:true,
        offer2:false,
        discount:20,
        checkoutAmount:0,
        totalItemCount:0
    },
    {
        id:2,
        name:'B',
        price:30,
        specialoffer:true,
        offer3:false,
        offer2:true,
        discount:15,
        checkoutAmount:0,
        totalItemCount:0
    },
    {
        id:3,
        name:'C',
        price:20,
        specialoffer:false,
        offer3:false,
        offer2:false,
        discount:0,
        checkoutAmount:0,
        totalItemCount:0
    },
    {
        id:4,
        name:'D',
        price:15,
        specialoffer:false,
        offer3:false,
        offer2:false,
        discount:0,
        checkoutAmount:0,
        totalItemCount:0
    }
]
var totalItemCount = 0;
var checkoutAmount = 0;

function Basket() {
    

    return (
        <div>
            <ul>
                {itemList.map((item, index) => (
                    <li key={index}>{item.name}
                    <button onClick={() => addItem(item)}>Add item</button>
                    </li>
                ))}
            </ul>
            <div>
                <label>Total items: </label>
                <label>{totalItemCount}</label>
            </div>
            <div>
                <label>Checkout Amount: </label>
                <label>{checkoutAmount}</label>
            </div>
        </div>
        
    )
}

function addItem(item){
    totalItemCount++
    if(item.specialoffer && ((item.offer2 && (item.totalItemCount+1)%2 === 0) || (item.offer3 && (item.totalItemCount+1)%3 === 0))){
        updateItemPriceCount(item,'discount')
    } else {
        updateItemPriceCount(item,'')
    }
    
    console.log('TOTAL count ',totalItemCount)
    console.log('TOTAL Amount ',checkoutAmount)
    // console.log('NEW ITEM list ',itemList)
}

function updateItemPriceCount(item, type){
    itemList.map((value,index)=>{
        if(value.id === item.id){
            value.checkoutAmount+= value.price;
            value.totalItemCount++;
            if(type === 'discount'){
                let discountMultiply = item.offer2 ? 2 : 3;
                console.log('CHeckout amount ',value.checkoutAmount,value.totalItemCount/discountMultiply,value.discount)
                value.checkoutAmount-= value.discount
            }
        }
        totalItemCount = totalItemCount+value.totalItemCount;
        checkoutAmount = checkoutAmount+value.checkoutAmount;
        return value;
    })
    console.log('NEW ITEM list ',itemList)

}

export default Basket;