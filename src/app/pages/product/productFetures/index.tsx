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
                    <Button animated onClick={() => setFeature('show')}>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                    <AddProduct />
                </>}
        </>
    )
}

export default ProductFeature