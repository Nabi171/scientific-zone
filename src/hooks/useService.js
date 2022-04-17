import React from 'react';
import useServices from './useServices';
// import useServices from "./"
const useService = (id) => {
    const [services] = useServices();
    return services.find(service => service.id == id);
};

export default useService;


//This function is used for finding a specific course by their id and return the course;

// const useCourse = (id) => {

//     const [courses] = useCourses();
//     return courses.find(course => course.id == id);
// }

// export default useCourse;