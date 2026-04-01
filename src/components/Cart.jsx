import shoppimg from "../assets/shopping-cart-01.png"
const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
    }
    return (
        <div className='p-10'>
            <h1 className="text-2xl font-bold">Your Cart</h1>
            {
                carts.length === 0 ?
                    <div className=" bg-gray-100 shadow-2xl rounded-lg mt-5 p-10 text-center ">
                        <img className="w-10 h-10 ml-100   justify-center" src={shoppimg}></img>
                        <p className="text-gray-500 font-bold text-3xl">Cart is empty</p>


                    </div>
                    :
                    <>
                        <div className="space-y-5 mt-4">
                            {
                                carts.map(item => <div className="flex items-center justify-between rounded-lg p-3 shadow-lg" key={item.id}>
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <img className="h-15 w-15 object-contain" src={item.image} />
                                        </div>
                                        <div>
                                            <h2 className=" font-normal">
                                                {item.name}
                                            </h2>
                                            <h2>
                                                <div className="text-gray-400">$
                                                    {item.price}</div>
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="text-[#FF3980]">Remove</div>
                                </div>)

                            }

                        </div>
                        <div className="flex justify-between bg-gray-200 text-black font-medium p-3 mt-5 rounded-lg shadow-lg">
                            <div>Total</div>
                            <div>${totalPrice}</div>
                        </div>
                        <button onClick={handlePayment} className="btn w-full mt-5 text-purple-100 text-2xl rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">Proceed to Checkout</button>
                    </>
            }



        </div>
    );
};

export default Cart;