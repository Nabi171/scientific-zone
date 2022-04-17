import React from 'react';
import { Card, Table } from 'react-bootstrap';
import SignUp from '../SignUp/SignUp';

const Blogs = () => {
    return (
        <div>

            <Card className="my-4">
                <Card.Title className='text-danger pt-1 mt-1'>What is Context API?</Card.Title>
                <hr />
                <p className='p-3'><strong>Context api is a part of React router</strong> which is taken important role to pass the data from its parents or granparents executing the code by props drilling.Its easier for the developers to pass the code by props drilling from any drinling its grand parentts or parent component.This feature is made the easiest path for the developers.
                <br />
                    React.createContext()  which provides the users from its grandparents or components and helps to store the message or data.Then the users use the code without props drilling where they call the data in any component if they pass the data in their father component.So,this api creates shortest way for props drinling.</p>

            </Card>

            <Card className='mb-4'>
                <Card.Title className='text-danger pt-1 mt-1'>What is Semantic Tag?</Card.Title>
                <hr />
                <p className='p-3'>
                    <strong>Semantic HTML tags provide information about </strong> the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code.Using semantic tags gives you many more hooks for styling your content, too

                    When using semantic tags to convey meaning rather than for presentation purposes, be careful that you don't use them incorrectly simply for their common display properties. Some of the most commonly misused semantic tags include: 1.blockquote, 2.p , 3. ul , 4. h1 to h6
            </p>

            </Card>

            <Card className='mt-4 mx-3'>
                <Card.Body>
                    <Card.Title className='text-danger pt-1 mt-1'>Block vs Inline block element?</Card.Title>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Block</th>
                                <th>Inline Block</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Block element occupy the full space or width where you can controll the height with css element</td>
                                <td>Its cant occupy the new line where you can add the height or with of the element</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Block element default width is 100%.</td>
                                <td>Its element cant occupy full width its occupied its own space which cant be 100%.</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>For Example:paragarp tag-p,headline tag-h,horizontal tag-h etc </td>
                                <td>Its Example:anchontag-a,bold tag-b,italictag-i etc</td>
                            </tr>
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>





        </div>
    );
};

export default Blogs;