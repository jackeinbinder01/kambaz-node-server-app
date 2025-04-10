import model from "./model.js";

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
    console.log("ENROLLMENTS:", JSON.stringify(enrollments, null, 2));
    return enrollments.map((enrollment) => enrollment.user);
};

export async function enrollUserInCourse(user, course) {
    const newEnrollment = { user, course, _id: `${user}-${course}` }
    return model.create(newEnrollment);
};

export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
};

