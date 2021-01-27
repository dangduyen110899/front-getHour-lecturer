import TableLecturer from "pages/admin/DataTeacher/TableLecturer";
import TableDataExcel from "pages/admin/DataTKB/TableDataExcel";

export const routesAdmin = [
  // {
  //   path: "/",
  //   exact: false,
  //   components: LayoutAdmin,
  // },
  // {
  //   path: "/admin/tkb",
  //   exact: true,
  //   components: match => <TableDataExcel match={match}/>,
  // },
  {
    path: "/admin/lecturer",
    exact: false,
    components: match => <TableLecturer match={match}/>,
  },
  {
    path: "/admin/student",
    exact: false,
    components: match => <TableLecturer match={match}/>,
  },
  {
    path: "/admin/tkb",
    exact: false,
    components: match => <TableLecturer match={match}/>,
  },
  {
    path: "/admin/kltn",
    exact: false,
    components: match => <TableLecturer match={match}/>,
  }
];