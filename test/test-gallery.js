import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';
import Image from '../js/components/image'

describe('Gallery component', function(){
	it('Renders images and their descriptions', function(){
		const url = "http://www.example.com/image.png";
		const description = "some things";


		
		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={[{url:url, description:description}]}/>);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');


		const gallery = result.props.children[0];
		gallery.type.should.equal(Image);
		gallery.props.url.should.equal(url);
		gallery.props.description.should.equal(description)
		Object.keys(gallery.props).length.should.equal(2);

		



	})
})