 import { Products } from './components/products';
 import contents from './content';

 export default function App() {
     return(
            <div className='App'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        productimage={contents.productimage}
                        productname={contents.productname}
                        oldprice={contents.oldprice}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
     )
 }