import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function(){
	it('Renders images and their descriptions', function(){
		
		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={[]}/>);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');
	})
})