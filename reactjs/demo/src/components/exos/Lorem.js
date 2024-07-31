import React from 'react'

const Lorem = ({limit, schnap}) => {
    
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel ex eleifend condimentum. Suspendisse nulla ante, hendrerit ut quam eget, pretium faucibus orci. Cras imperdiet congue feugiat. Aliquam pharetra, ex ut vehicula suscipit, nisi enim placerat enim, eu viverra quam est eu mauris. In hac habitasse platea dictumst. Etiam non odio a magna cursus molestie. Donec et iaculis justo.';

    const schnapsumText = "Lorem Elsass ipsum hopla Richard Schirmeck turpis, wurscht kartoffelsalad sagittis Huguette amet, libero, vielmols, nüdle Kabinetpapier gravida Chulia Roberstau munster Gal. hopla condimentum ullamcorper libero. risus, elit rossbolla eget morbi sit merci vielmols bredele senectus quam, Pellentesque Hans geht's non Mauris porta yeuh. dui sit mänele rucksack auctor, hopla hopla Oberschaeffolsheim geïz mamsell wie so schpeck adipiscing in, blottkopf, sit Pfourtz ! id suspendisse Salu bissame barapli ftomi! picon bière Verdammi libero,  bissame Heineken Christkindelsmärik rhoncus Carola gewurztraminer lotto-owe Strasbourg Spätzle tristique quam.";

    let text = '';
    if (schnap === true) {
        text = limit ? schnapsumText.substring(0, limit) : schnapsumText;
    } else {
        text = limit ? loremText.substring(0, limit) : loremText;
    }

    return (
        <p>{text}</p>
    )
}

export default Lorem