import { useState } from 'react';

import Loading from '../../Loading';

const Database = () => {

    const [ loading, setLoading ] = useState(true);

    return (
        <div className="flex center test test_5">
            
            { loading && <Loading /> }

        </div>
    )
  
}

export default Database;