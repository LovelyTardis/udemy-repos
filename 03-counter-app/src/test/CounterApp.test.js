import React from "react";
import {shallow} from 'enzyme'
import '@testing-library/jest-dom/extend-expect';
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
    test('debe mostrar correctamente <CounterApp />', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar correctamente el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('100');
    });
});