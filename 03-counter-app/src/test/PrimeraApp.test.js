import React from "react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola, buenas"', () => {
    //     const saludo = 'Hola, buenas';

    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> );

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe mostrar correctamente <PrimeraApp />', () => {
        const saludo = 'Hola, buenas';
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar correctamente el subtítulo', () => {
        const saludo = 'Hola, buenas';
        const subTitulo = 'Soy un subtítulo';
        const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subTitulo}/> );

        const textoParrafo = wrapper.find('#texto').text();
        expect(textoParrafo).toBe(subTitulo);
    });
});