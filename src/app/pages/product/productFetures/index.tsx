import { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'
import UpdateProduct from './UpdateProduct'

const ProductFeature: React.FC = () => {
    const [feature, setFeature] = useState<string>('show')
    const [currentProductID, setCurrentProductID] = useState<number>(1)

    return (
        <>
            {feature === 'show' &&
                <div style={{ textAlign: 'right' }}>
                    <Button color='grey' onClick={() => setFeature('add')}>New Product</Button>
                    <ProductTable setCurrentProductID={setCurrentProductID} setFeature={setFeature} />
                </div>
            }
            {feature === 'add' &&
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <AddProduct />
                </>
            }
            {feature === 'update' &&
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <UpdateProduct id={currentProductID} />
                </>
            }
        </>
    )
}

export default ProductFeature