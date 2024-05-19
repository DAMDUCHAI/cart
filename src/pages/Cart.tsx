import ProductList from "../components/ProductList";
import Cart  from "../components/Cart";


export function CartPage(){
    return            <div className="container">
    <h3>Danh sách sản phẩm</h3>
    <div className="text-right">
        <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i className="fa fa-cart mr-5"><i className="fa fa-cart-arrow-down"></i>(fd) Giỏ hàng</i>
        </span>
    </div>                
    <ProductList />
    <Cart />
</div>
}