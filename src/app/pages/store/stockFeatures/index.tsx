import { Dispatch, SetStateAction, useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import AddToStock from './AddToStock'
import StocksTable from './StockTable'

interface StockItemProps {
    /**Id of the order */
    id: number,
    /**Current feature hook */
    setCurrentView: Dispatch<SetStateAction<string>>
}

const StockFeature = ({ id, setCurrentView }: StockItemProps): JSX.Element => {
    const [feature, setFeature] = useState<string>('show')

    return (
        <>
            {feature === 'show' &&
                <>
                    <Button color='black' onClick={() => setCurrentView('store')}>
                        <Icon name='arrow left' inverted />Back to Store list
                    </Button>
                    <div style={{ textAlign: 'right' }}>
                        <Button color='grey' onClick={() => setFeature('add')}>+ Add to stock</Button>
                    </div>
                    <StocksTable id={id} setCurrentView={setCurrentView} />
                </>
            }
            {feature === 'add' &&
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <AddToStock />
                </>
            }
        </>
    )
}

export default StockFeature