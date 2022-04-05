// IMPORT MODULES under test here:
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('completed item will return an <li> with a complete class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="complete">apples</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ description: 'apples', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('incomplete item will return an <li> with item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>sushi</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ description: 'sushi', complete: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
