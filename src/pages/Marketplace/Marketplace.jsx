
import FixedOrderBuy from "../../layouts/Marketplace/FixedOrderBuy"
import MarketName from "../../layouts/Marketplace/MarketName"
import MarketplaceHeader from "../../layouts/Marketplace/MarketplaceHeader"
import ProductList from "../../layouts/Marketplace/ProductList"

const Marketplace = () => {
  return (
    <div className="max-w-sm min-h-screen mx-auto overflow-x-hidden">
            <MarketplaceHeader />
            <div className="p-3 pb-32">
                <MarketName />
                <ProductList/>
            </div>
            <FixedOrderBuy/>
        </div>
  )
}

export default Marketplace