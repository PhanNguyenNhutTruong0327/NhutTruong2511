import { useCart } from "react-use-cart";
import "./style.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";


function Cart() {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <div className="cart">
            <div className="container row">
                <div className="col-8">
                    <section className='cart-items'>
                        <div className='container d_flex'>
                            {/* 1 product */}
                            <div className='cart-list product d_flex row' key="">
                                <div className="col-1 mt-5">
                                    <input type="checkbox" className="" />
                                </div>
                                <div className="col-8 row">
                                    <div className='img'>
                                        <img src={require(`../../../assets/images/products/banh-bong-lan-cuon.jpg`)} alt='' />
                                    </div>
                                    <div className='cart-details'>
                                        <h3>Bánh bông lan cuộn</h3>
                                        <h4>
                                            15.00000 * 1
                                            <span>15.000</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className='cart-items-function col-2'>
                                    <div className='cartControl row'>
                                        <div className="btn-add col-4">
                                            <button onClick={() => updateItemQuantity()} className="ms-2 mt-2 border"><FiMinus /></button>

                                        </div>
                                        <div className="qty col-2">
                                            <h6 className="text-center mt-1 ms-2">1</h6>
                                        </div>
                                        <div className="btn-sub col-4">
                                            <button onClick={() => updateItemQuantity()} className="ms-2 mt-2 border "><FiPlus /></button>

                                        </div>
                                    </div>
                                </div>
                                <div className="remove-cart col-1">
                                    <div>
                                        <button variant="danger" onClick={() => removeItem()} className="ms-5"><FaRegTrashAlt /></button>

                                    </div>
                                </div>

                                <div className='cart-item-price'></div>
                            </div>

                            <div className='cart-list product d_flex row' key="">
                                <div className="col-1 mt-5">
                                    <input type="checkbox" className="" />
                                </div>
                                <div className="col-8 row">
                                    <div className='img'>
                                        <img src={require(`../../../assets/images/products/banh-bong-lan-cuon.jpg`)} alt='' />
                                    </div>
                                    <div className='cart-details'>
                                        <h3>Bánh bông lan cuộn</h3>
                                        <h4>
                                            15.00000 * 1
                                            <span>15.000</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className='cart-items-function col-2'>
                                    <div className='cartControl row'>
                                        <div className="btn-add col-4">
                                            <button onClick={() => updateItemQuantity()} className="ms-2 mt-2 border"><FiMinus /></button>

                                        </div>
                                        <div className="qty col-2">
                                            <h6 className="text-center mt-1 ms-2">1</h6>
                                        </div>
                                        <div className="btn-sub col-4">
                                            <button onClick={() => updateItemQuantity()} className="ms-2 border mt-2 "><FiPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="remove-cart col-1">
                                    <div>
                                        <button variant="danger" onClick={() => removeItem()} className="ms-5"><FaRegTrashAlt /></button>

                                    </div>
                                </div>

                                <div className='cart-item-price'></div>
                            </div>




                        </div>
                    </section >
                </div>
                <div className="col-4 cart-items">
                    <div className='container d_flex'>
                        <div className="cart-list product d_flex">
                            <div className='cart-total product'>
                                <h2 className="mt-3">Thông tin đơn hàng</h2>
                                <div className="d-flex mb-1">
                                    <h4 >Tạm tính :</h4>
                                    <h3>1.00</h3>
                                </div>
                                <div className="d-flex mb-1">
                                    <h4>Phí vận chuyển :</h4>
                                    <h3>1.00</h3>
                                </div>
                                <div className='d-flex'>
                                    <h4 className="">Tổng tiền :</h4>
                                    <h3>1.00</h3>
                                </div>
                                <div className="mt-4 btn-order text-center">
                                    <div>
                                        <button className="btn btn-danger">Đặt hàng</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;