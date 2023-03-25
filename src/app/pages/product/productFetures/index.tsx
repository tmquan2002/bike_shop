import { useNumber, useString } from '@app/hooks/use-state-custom'
import { Button, Icon } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'
import UpdateProduct from './UpdateProduct'

const ProductFeature: React.FC = () => {
    const [feature, setFeature] = useString('show')
    const [currentProductID, setCurrentProductID] = useNumber(1)

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