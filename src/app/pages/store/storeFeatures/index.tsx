import { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import AddStore from './AddStore'
import StoreTable from './StoreTable'
import UpdateStore from './UpdateStore'


const StoreFeature = (): JSX.Element => {
    const [feature, setFeature] = useState<string>('show')
    const [currentUpdateID, setCurrentUpdateID] = useState(1)

    return (
        <>
            {feature === 'show' &&
                <StoreTable setFeature={setFeature} setCurrentUpdateID={setCurrentUpdateID}/>
            }
            {feature === 'add' &&
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <AddStore />
                </>
            }
            {feature === 'edit' &&
                <>
                    <Button color='grey' onClick={() => setFeature('show')}>
                        <Icon name='arrow left' inverted />Back
                    </Button>
                    <UpdateStore id={currentUpdateID}/>
                </>
            }
        </>
    )
}

export default StoreFeature