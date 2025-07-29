const finalPriceWrappers = document.querySelectorAll('[data-price-type="finalPrice"]');

finalPriceWrappers.forEach((wrapper, index, array) => 
    {
        const currentPriceElement = wrapper.querySelector('.price');
        const nextWrapper = array[index + 1];

        if (currentPriceElement && nextWrapper) 
            {
            const nextPriceElement = nextWrapper.querySelector('.price');

            if (nextPriceElement) 
                {
                const nextPriceText = nextPriceElement.textContent.trim();
                const nextPrice = parseFloat(nextPriceText.replace(/[^\d.]/g, ''));

                const message = document.createElement('div');
                message.style.color = 'blue';
                message.style.fontWeight = 'bold';  // corrected from 'fontStyle'
                message.style.fontSize = '15px';

                if (nextPrice < 30) 
                {
                    message.textContent = 'Next product price is less than €30';
                } 
                else if (nextPrice === 30) 
                {
                    message.textContent = "Next product price is €30";
                } 
                else 
                {
                    message.textContent = 'Next product price is greater than €30';
                }
                currentPriceElement.insertAdjacentElement('afterend', message);
            }
    }
});


//Script For Swapping the default images and hover images
document.querySelectorAll('ol.products.list.items.product-items.row.row-wrapper.row-4').forEach(ol => {
document.querySelectorAll('.product-item-image').forEach(container => {
const defaultimage = container.querySelector('img.product-image-photo');
const hoverimage = container.querySelector('img.img-hover-show');

if (defaultimage && hoverimage) 
    {
        const tempSrc = defaultimage.src;
        defaultimage.src = hoverimage.src;
        hoverimage.src = tempSrc;
    }
    });
});

// Script to print the label in right side of the products

document.querySelectorAll('ol.products.list.items.product-items.row.row-wrapper.row-4 li.item.product').forEach(product => 
{
    const nameAnchor = product.querySelector('.product-item-link');
    const labelSpan = product.querySelector('.label-text span');

    if (nameAnchor) 
    {
        let labelText = labelSpan ? labelSpan.textContent : 'Old';
        nameAnchor.textContent = `${nameAnchor.textContent} + ${labelText}`;
    }
});
