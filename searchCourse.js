import React from 'react';

import Aux from '../../lib/hoc/aux.component';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const author = (props) => {
return props.authors.map((author, index) => {
return (
<Aux key={index}>
<Chip
icon={<FaceIcon/>}
label={author.first_name + ' ' + author.last_name}
onDelete={(author) => props.remove(author)}/>
</Aux>
);
});
};

export default author;