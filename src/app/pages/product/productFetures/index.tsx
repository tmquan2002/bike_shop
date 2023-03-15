import { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'

const ProductFeature: React.FC = () => {
    const [feature, setFeature] = useState<string>('show')

    return (
        <>
            {feature === 'show' ?
                <>
                    <div style={{ textAlign: 'right' }}>
                        <Button color='grey' onClick={() => setFeature('add')}>New Product</Button>
                        <ProductTable />
                    </div>
                </> :
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <AddProduct />
                </>}
        </>
    )
}

export default ProductFeature