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
                message.style.fontWeight = 'bold';  
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
document.querySelectorAll('ol.products.list.items.product-items.row.row-wrapper.row-4').forEach(ol => 
{
    document.querySelectorAll('.product-item-image').forEach(container => 
    {
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

document.querySelectorAll('.product-item-image').forEach(imageContainer => 
{
    const existingLabel = imageContainer.querySelector('.label-text span');

    if (!existingLabel) {
        // Create container div
        const labelContainer = document.createElement('div');
        labelContainer.className = 'mgn-product-label product-label-container bot-left shape-new-2';
        labelContainer.style = 'width:96px; height:0; padding-bottom:96px; --space-y: 4px;';

        // Create shape wrapper
        const shapeWrapper = document.createElement('div');
        shapeWrapper.className = 'shape-wrapper shape-new-2';

        // Create SVG icon
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('fill', '#f0c0c2');
        svg.setAttribute('style', 'height:32px');
        svg.setAttribute('class', 'svg-icon');
        svg.setAttribute('viewBox', '0 0 180 60');
        svg.setAttribute('xml:space', 'preserve');

        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('x', '0');
        use.setAttribute('y', '0');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#shape-new-2');

        svg.appendChild(use);

        const labelTextDiv = document.createElement('div');
        labelTextDiv.className = 'label-text';
        labelTextDiv.style = 'font-size:15px;color:#ffffff;';

        const labelSpan = document.createElement('span');
        labelSpan.textContent = 'Old';

        labelTextDiv.appendChild(labelSpan);
        shapeWrapper.appendChild(svg);
        shapeWrapper.appendChild(labelTextDiv);
        labelContainer.appendChild(shapeWrapper);
        imageContainer.appendChild(labelContainer);
    }
});

// Script for printing the names of the label in product title

document.querySelectorAll('ol.products.list.items.product-items.row.row-wrapper.row-4 li.item.product').forEach(product => 
{
    const nameAnchor = product.querySelector('.product-item-link');
    const labelSpan = product.querySelector('.label-text span');

    if (labelSpan) 
    {

        let labelText = labelSpan.textContent 
        if(labelText !== 'Old')
        nameAnchor.innerHTML = `${nameAnchor.textContent} <strong> + ${labelText} </strong>`;
    }
});

//Script to print the page title below the products

const pageTitle = document.querySelector('.page-title .base')?.textContent;

    document.querySelectorAll('[data-price-type="finalPrice"]').forEach(priceSpan => 
    {
        const titleDiv = document.createElement('div');
        titleDiv.textContent = pageTitle;
        titleDiv.style.fontSize = '20px';
        titleDiv.style.color = '#444';
        titleDiv.style.fontStyle = 'bolder';
        titleDiv.style.textAlign = 'center';
        titleDiv.style.margin = '4px auto';

        priceSpan.parentNode.insertBefore(titleDiv, priceSpan.nextSibling);
    });






       
