import { ProductItemProps } from 'Frontend/inteface/seller/UiProps';
import React, { useState } from 'react';



const ProductDescription: React.FC<ProductItemProps> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const words = (description!=null)?description.split(''):[];
    const isLong = words.length > 20;

    const displayedDescription = isExpanded ? description : words.slice(0, 20).join('') + (isLong ? '...' : '');

    return (
        <div>
            {displayedDescription}
            {isLong && (
                <span style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }} onClick={toggleDescription}>
                    {isExpanded ? 'Hide' : 'Show more'}
                </span>
            )}
        </div>
    );
};

export default ProductDescription;
