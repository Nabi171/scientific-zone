import React from 'react';
import { Card, Table } from 'react-bootstrap';
import SignUp from '../SignUp/SignUp';

const Blogs = () => {
    return (
        <div>

            <Card className="my-4">
                <Card.Title className='text-danger pt-1 mt-1'> Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                <hr />
                <p className='p-3'><strong>The firebase is mainly</strong> used for the authentication by using SignUp and signIN process to get connected with authentication where it can maintain security using authentication using firebase.So we use firebase authenticated the site where different types medium use for authentication like Google,Facebook,Github,Email etc to make sure  authentication with firebase.We use this normaly for getting connected with email or other plathforms with firebase Authentication.
                <br />
                    For implement authentication there are plethora of ways make authenticated the site beside firebase like Back4App,Parse,AWS Amplify,Backendless,Kuzzle,Supabase etc which are used for authentication beside using the firbase.</p>
            </Card>

            <Card className='mb-4'>
                <Card.Title className='text-danger pt-1 mt-1'>What other services does firebase provide other than authentication?</Card.Title>
                <hr />
                <p className='p-3'>
                    <strong>Mostly we used firebase for authentication,</strong>where users identity manintain the users data in the site used firebase authentication besides it provides more service like backend progam services,use SDKs and made UI libraries also to authenticate users your site.


            </p>


            </Card>

            <Card className='mt-4 mx-3'>
                <Card.Body>
                    <Card.Title className='text-danger pt-1 mt-1'>Difference between authorization and authentication</Card.Title>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Authorization</th>
                                <th>Authentication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Authorization means permiting access to the resource </td>
                                <td>Authentication check the user identity and verfify the user identity.</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Authorazation depend on user where the authenticated person allowed to do.</td>
                                <td>Authentication make check person to test who claim to be the web.</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>here security staff implement and maintain access control system </td>
                                <td>users provide the authentication factor when requesting access</td>
                            </tr>
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>





        </div>
    );
};

export default Blogs;