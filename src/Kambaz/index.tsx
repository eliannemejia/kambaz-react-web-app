import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
      setEnrolledCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const isEnrolled = (courseId: string) => {
    return enrolledCourses.some((course) => course._id === courseId);
  }

  const unenroll = async (course: any) => {
    const status = await userClient.unenrollFromCourse(course);
    if (status) {
      
    }
    setEnrolledCourses(enrolledCourses.filter(c => c._id !== course._id));
    if (showAllCourses) {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } 
    else {
      const courses =  await userClient.findMyCourses();
      setCourses(courses);
    }
  }

  const enroll = async (course: any) => {
    console.log(course);
    console.log(course._id);
    const status = await userClient.enrollInCourse(course);
    if (status) {
      
    }
    setEnrolledCourses([...enrolledCourses, course]);
    if (showAllCourses) {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } 
    else {
      const courses =  await userClient.findMyCourses();
      setCourses(courses);
    }
  }

  const handleToggleCourses = async () => {
    setShowAllCourses(prevState => !prevState);

    if (!showAllCourses) {
      const allCourses = await courseClient.fetchAllCourses();
      setCourses(allCourses);
    }
    else {
      const courses = await userClient.findMyCourses();
      console.log(enrolledCourses);
      setCourses(courses);
    }
  };

  
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setEnrolledCourses([...enrolledCourses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Session>
      <div id="wd-kambaz" className="d-flex w-100">
        <KambazNavigation />
        <div className="wd-main-content-offset w-100 p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              showAllCourses={handleToggleCourses}
              isEnrolled={isEnrolled}
              enroll={enroll}
              unenroll={unenroll} /> </ProtectedRoute>} />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /> </ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>

  );
}


