import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addDirectorMutation, updatedDirectorMutation } from './mutations'
import { directorsQuery } from '../DirectorsTable/queries';

import { styles } from './styles';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
        addDirector: director => mutate({
            variables: director,
            refetchQueries: [{ query: directorsQuery }]
        })
    })
});

const withGraphqlUpdate = graphql(updatedDirectorMutation, {
    props: ({ mutate }) => ({
        updateDirector: director => mutate({
            variables: director,
            refetchQueries: [{ query: directorsQuery }]
        })
    })
});

export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate);
