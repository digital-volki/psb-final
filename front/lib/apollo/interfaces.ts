export type I18n = any;

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** ISO8601 Date values */
    Date: any;
};

export type Courses_Elements_Item_Union = Articles | Partition | Tasks;

export type Partition_Elements_Item_Union = Articles | Tasks;

export type Query = {
    __typename?: 'Query';
    articles?: Maybe<Array<Maybe<Articles>>>;
    articles_by_id?: Maybe<Articles>;
    courses?: Maybe<Array<Maybe<Courses>>>;
    courses_by_id?: Maybe<Courses>;
    courses_elements?: Maybe<Array<Maybe<Courses_Elements>>>;
    courses_elements_aggregated?: Maybe<Array<Maybe<Courses_Elements_Aggregated>>>;
    courses_elements_by_id?: Maybe<Courses_Elements>;
    partition?: Maybe<Array<Maybe<Partition>>>;
    partition_by_id?: Maybe<Partition>;
    partition_elements?: Maybe<Array<Maybe<Partition_Elements>>>;
    partition_elements_aggregated?: Maybe<Array<Maybe<Partition_Elements_Aggregated>>>;
    partition_elements_by_id?: Maybe<Partition_Elements>;
    project_staff?: Maybe<Array<Maybe<Project_Staff>>>;
    project_staff_by_id?: Maybe<Project_Staff>;
    projects?: Maybe<Array<Maybe<Projects>>>;
    projects_by_id?: Maybe<Projects>;
    projects_courses?: Maybe<Array<Maybe<Projects_Courses>>>;
    projects_courses_aggregated?: Maybe<Array<Maybe<Projects_Courses_Aggregated>>>;
    projects_courses_by_id?: Maybe<Projects_Courses>;
    projects_project_staff?: Maybe<Array<Maybe<Projects_Project_Staff>>>;
    projects_project_staff_aggregated?: Maybe<Array<Maybe<Projects_Project_Staff_Aggregated>>>;
    projects_project_staff_by_id?: Maybe<Projects_Project_Staff>;
    tasks?: Maybe<Array<Maybe<Tasks>>>;
    tasks_by_id?: Maybe<Tasks>;
};


export type QueryArticlesArgs = {
    filter?: InputMaybe<Articles_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryCoursesArgs = {
    filter?: InputMaybe<Courses_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCourses_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryCourses_ElementsArgs = {
    filter?: InputMaybe<Courses_Elements_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCourses_Elements_AggregatedArgs = {
    filter?: InputMaybe<Courses_Elements_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCourses_Elements_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryPartitionArgs = {
    filter?: InputMaybe<Partition_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartition_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryPartition_ElementsArgs = {
    filter?: InputMaybe<Partition_Elements_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartition_Elements_AggregatedArgs = {
    filter?: InputMaybe<Partition_Elements_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartition_Elements_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryProject_StaffArgs = {
    filter?: InputMaybe<Project_Staff_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProject_Staff_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryProjectsArgs = {
    filter?: InputMaybe<Projects_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjects_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryProjects_CoursesArgs = {
    filter?: InputMaybe<Projects_Courses_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjects_Courses_AggregatedArgs = {
    filter?: InputMaybe<Projects_Courses_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjects_Courses_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryProjects_Project_StaffArgs = {
    filter?: InputMaybe<Projects_Project_Staff_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjects_Project_Staff_AggregatedArgs = {
    filter?: InputMaybe<Projects_Project_Staff_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjects_Project_Staff_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryTasksArgs = {
    filter?: InputMaybe<Tasks_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTasks_By_IdArgs = {
    id: Scalars['ID'];
};

export type Articles = {
    __typename?: 'articles';
    content?: Maybe<Scalars['String']>;
    date_created?: Maybe<Scalars['Date']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_updated?: Maybe<Scalars['Date']>;
    date_updated_func?: Maybe<Datetime_Functions>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    status: Scalars['String'];
    thumbnail?: Maybe<Directus_Files>;
    user_created?: Maybe<Directus_Users>;
    user_updated?: Maybe<Directus_Users>;
};


export type ArticlesThumbnailArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesUser_UpdatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Courses = {
    __typename?: 'courses';
    date_created?: Maybe<Scalars['Date']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_updated?: Maybe<Scalars['Date']>;
    date_updated_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']>;
    elements?: Maybe<Array<Maybe<Courses_Elements>>>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    status: Scalars['String'];
    thumbnail?: Maybe<Directus_Files>;
    user_created?: Maybe<Directus_Users>;
    user_updated?: Maybe<Directus_Users>;
};


export type CoursesElementsArgs = {
    filter?: InputMaybe<Courses_Elements_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CoursesThumbnailArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CoursesUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CoursesUser_UpdatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Courses_Elements = {
    __typename?: 'courses_elements';
    collection?: Maybe<Scalars['String']>;
    courses_id?: Maybe<Courses>;
    id?: Maybe<Scalars['ID']>;
    item?: Maybe<Courses_Elements_Item_Union>;
    order?: Maybe<Scalars['Int']>;
};


export type Courses_ElementsCourses_IdArgs = {
    filter?: InputMaybe<Courses_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Courses_Elements_Aggregated = {
    __typename?: 'courses_elements_aggregated';
    avg?: Maybe<Courses_Elements_Aggregated_Fields>;
    avgDistinct?: Maybe<Courses_Elements_Aggregated_Fields>;
    count?: Maybe<Courses_Elements_Aggregated_Fields>;
    countDistinct?: Maybe<Courses_Elements_Aggregated_Fields>;
    group?: Maybe<Scalars['JSON']>;
    max?: Maybe<Courses_Elements_Aggregated_Fields>;
    min?: Maybe<Courses_Elements_Aggregated_Fields>;
    sum?: Maybe<Courses_Elements_Aggregated_Fields>;
    sumDistinct?: Maybe<Courses_Elements_Aggregated_Fields>;
};

export type Courses_Elements_Aggregated_Fields = {
    __typename?: 'courses_elements_aggregated_fields';
    id?: Maybe<Scalars['Float']>;
    order?: Maybe<Scalars['Float']>;
};

export type Datetime_Functions = {
    __typename?: 'datetime_functions';
    day?: Maybe<Scalars['Int']>;
    hour?: Maybe<Scalars['Int']>;
    minute?: Maybe<Scalars['Int']>;
    month?: Maybe<Scalars['Int']>;
    second?: Maybe<Scalars['Int']>;
    week?: Maybe<Scalars['Int']>;
    weekday?: Maybe<Scalars['Int']>;
    year?: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
    __typename?: 'directus_files';
    charset?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    duration?: Maybe<Scalars['Int']>;
    embed?: Maybe<Scalars['String']>;
    filename_disk?: Maybe<Scalars['String']>;
    filename_download: Scalars['String'];
    filesize?: Maybe<Scalars['Int']>;
    folder?: Maybe<Directus_Folders>;
    height?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['ID']>;
    location?: Maybe<Scalars['String']>;
    metadata?: Maybe<Scalars['JSON']>;
    modified_by?: Maybe<Directus_Users>;
    modified_on: Scalars['Date'];
    modified_on_func?: Maybe<Datetime_Functions>;
    storage: Scalars['String'];
    tags?: Maybe<Scalars['JSON']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uploaded_by?: Maybe<Directus_Users>;
    uploaded_on: Scalars['Date'];
    uploaded_on_func?: Maybe<Datetime_Functions>;
    width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
    filter?: InputMaybe<Directus_Folders_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders = {
    __typename?: 'directus_folders';
    id?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
    parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
    filter?: InputMaybe<Directus_Folders_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles = {
    __typename?: 'directus_roles';
    admin_access: Scalars['Boolean'];
    app_access: Scalars['Boolean'];
    description?: Maybe<Scalars['String']>;
    enforce_tfa: Scalars['Boolean'];
    icon: Scalars['String'];
    id?: Maybe<Scalars['ID']>;
    ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
    name: Scalars['String'];
    users?: Maybe<Array<Maybe<Directus_Users>>>;
};


export type Directus_RolesUsersArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users = {
    __typename?: 'directus_users';
    avatar?: Maybe<Directus_Files>;
    description?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    language?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    last_page?: Maybe<Scalars['String']>;
    location?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    role?: Maybe<Directus_Roles>;
    status: Scalars['String'];
    tags?: Maybe<Scalars['JSON']>;
    tfa_secret?: Maybe<Scalars['String']>;
    theme?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Partition = {
    __typename?: 'partition';
    elements?: Maybe<Array<Maybe<Partition_Elements>>>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
};


export type PartitionElementsArgs = {
    filter?: InputMaybe<Partition_Elements_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Partition_Elements = {
    __typename?: 'partition_elements';
    collection?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    item?: Maybe<Partition_Elements_Item_Union>;
    partition_id?: Maybe<Partition>;
};


export type Partition_ElementsPartition_IdArgs = {
    filter?: InputMaybe<Partition_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Partition_Elements_Aggregated = {
    __typename?: 'partition_elements_aggregated';
    avg?: Maybe<Partition_Elements_Aggregated_Fields>;
    avgDistinct?: Maybe<Partition_Elements_Aggregated_Fields>;
    count?: Maybe<Partition_Elements_Aggregated_Fields>;
    countDistinct?: Maybe<Partition_Elements_Aggregated_Fields>;
    group?: Maybe<Scalars['JSON']>;
    max?: Maybe<Partition_Elements_Aggregated_Fields>;
    min?: Maybe<Partition_Elements_Aggregated_Fields>;
    sum?: Maybe<Partition_Elements_Aggregated_Fields>;
    sumDistinct?: Maybe<Partition_Elements_Aggregated_Fields>;
};

export type Partition_Elements_Aggregated_Fields = {
    __typename?: 'partition_elements_aggregated_fields';
    id?: Maybe<Scalars['Float']>;
};

export type Project_Staff = {
    __typename?: 'project_staff';
    id?: Maybe<Scalars['ID']>;
    role?: Maybe<Directus_Roles>;
    user?: Maybe<Directus_Users>;
};


export type Project_StaffRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Project_StaffUserArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Projects = {
    __typename?: 'projects';
    courses?: Maybe<Array<Maybe<Projects_Courses>>>;
    date_created?: Maybe<Scalars['Date']>;
    date_created_func?: Maybe<Datetime_Functions>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    staff?: Maybe<Array<Maybe<Projects_Project_Staff>>>;
    user_created?: Maybe<Directus_Users>;
};


export type ProjectsCoursesArgs = {
    filter?: InputMaybe<Projects_Courses_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProjectsStaffArgs = {
    filter?: InputMaybe<Projects_Project_Staff_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProjectsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Projects_Courses = {
    __typename?: 'projects_courses';
    courses_id?: Maybe<Courses>;
    id?: Maybe<Scalars['ID']>;
    projects_id?: Maybe<Projects>;
};


export type Projects_CoursesCourses_IdArgs = {
    filter?: InputMaybe<Courses_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Projects_CoursesProjects_IdArgs = {
    filter?: InputMaybe<Projects_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Projects_Courses_Aggregated = {
    __typename?: 'projects_courses_aggregated';
    avg?: Maybe<Projects_Courses_Aggregated_Fields>;
    avgDistinct?: Maybe<Projects_Courses_Aggregated_Fields>;
    count?: Maybe<Projects_Courses_Aggregated_Fields>;
    countDistinct?: Maybe<Projects_Courses_Aggregated_Fields>;
    group?: Maybe<Scalars['JSON']>;
    max?: Maybe<Projects_Courses_Aggregated_Fields>;
    min?: Maybe<Projects_Courses_Aggregated_Fields>;
    sum?: Maybe<Projects_Courses_Aggregated_Fields>;
    sumDistinct?: Maybe<Projects_Courses_Aggregated_Fields>;
};

export type Projects_Courses_Aggregated_Fields = {
    __typename?: 'projects_courses_aggregated_fields';
    id?: Maybe<Scalars['Float']>;
};

export type Projects_Project_Staff = {
    __typename?: 'projects_project_staff';
    id?: Maybe<Scalars['ID']>;
    project_staff_id?: Maybe<Project_Staff>;
    projects_id?: Maybe<Projects>;
};


export type Projects_Project_StaffProject_Staff_IdArgs = {
    filter?: InputMaybe<Project_Staff_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Projects_Project_StaffProjects_IdArgs = {
    filter?: InputMaybe<Projects_Filter>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Projects_Project_Staff_Aggregated = {
    __typename?: 'projects_project_staff_aggregated';
    avg?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    avgDistinct?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    count?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    countDistinct?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    group?: Maybe<Scalars['JSON']>;
    max?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    min?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    sum?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
    sumDistinct?: Maybe<Projects_Project_Staff_Aggregated_Fields>;
};

export type Projects_Project_Staff_Aggregated_Fields = {
    __typename?: 'projects_project_staff_aggregated_fields';
    id?: Maybe<Scalars['Float']>;
};

export type Tasks = {
    __typename?: 'tasks';
    checkboxes?: Maybe<Scalars['JSON']>;
    date_created?: Maybe<Scalars['Date']>;
    date_created_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    input?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    radio?: Maybe<Scalars['String']>;
    status: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type Articles_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Articles_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Articles_Filter>>>;
    content?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated?: InputMaybe<Date_Filter_Operators>;
    date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    thumbnail?: InputMaybe<Directus_Files_Filter>;
    user_created?: InputMaybe<Directus_Users_Filter>;
    user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Boolean_Filter_Operators = {
    _eq?: InputMaybe<Scalars['Boolean']>;
    _neq?: InputMaybe<Scalars['Boolean']>;
    _nnull?: InputMaybe<Scalars['Boolean']>;
    _null?: InputMaybe<Scalars['Boolean']>;
};

export type Courses_Elements_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Courses_Elements_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Courses_Elements_Filter>>>;
    collection?: InputMaybe<String_Filter_Operators>;
    courses_id?: InputMaybe<Courses_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    item?: InputMaybe<String_Filter_Operators>;
    order?: InputMaybe<Number_Filter_Operators>;
};

export type Courses_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated?: InputMaybe<Date_Filter_Operators>;
    date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    elements?: InputMaybe<Courses_Elements_Filter>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    thumbnail?: InputMaybe<Directus_Files_Filter>;
    user_created?: InputMaybe<Directus_Users_Filter>;
    user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Date_Filter_Operators = {
    _eq?: InputMaybe<Scalars['String']>;
    _gt?: InputMaybe<Scalars['String']>;
    _gte?: InputMaybe<Scalars['String']>;
    _lt?: InputMaybe<Scalars['String']>;
    _lte?: InputMaybe<Scalars['String']>;
    _neq?: InputMaybe<Scalars['String']>;
    _nnull?: InputMaybe<Scalars['Boolean']>;
    _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
    day?: InputMaybe<Number_Filter_Operators>;
    hour?: InputMaybe<Number_Filter_Operators>;
    minute?: InputMaybe<Number_Filter_Operators>;
    month?: InputMaybe<Number_Filter_Operators>;
    second?: InputMaybe<Number_Filter_Operators>;
    week?: InputMaybe<Number_Filter_Operators>;
    weekday?: InputMaybe<Number_Filter_Operators>;
    year?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    charset?: InputMaybe<String_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    duration?: InputMaybe<Number_Filter_Operators>;
    embed?: InputMaybe<String_Filter_Operators>;
    filename_disk?: InputMaybe<String_Filter_Operators>;
    filename_download?: InputMaybe<String_Filter_Operators>;
    filesize?: InputMaybe<Number_Filter_Operators>;
    folder?: InputMaybe<Directus_Folders_Filter>;
    height?: InputMaybe<Number_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    location?: InputMaybe<String_Filter_Operators>;
    metadata?: InputMaybe<String_Filter_Operators>;
    modified_by?: InputMaybe<Directus_Users_Filter>;
    modified_on?: InputMaybe<Date_Filter_Operators>;
    modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    storage?: InputMaybe<String_Filter_Operators>;
    tags?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
    type?: InputMaybe<String_Filter_Operators>;
    uploaded_by?: InputMaybe<Directus_Users_Filter>;
    uploaded_on?: InputMaybe<Date_Filter_Operators>;
    uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
    admin_access?: InputMaybe<Boolean_Filter_Operators>;
    app_access?: InputMaybe<Boolean_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
    icon?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    ip_access?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    users?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Users_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
    avatar?: InputMaybe<Directus_Files_Filter>;
    description?: InputMaybe<String_Filter_Operators>;
    email?: InputMaybe<String_Filter_Operators>;
    first_name?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    language?: InputMaybe<String_Filter_Operators>;
    last_name?: InputMaybe<String_Filter_Operators>;
    last_page?: InputMaybe<String_Filter_Operators>;
    location?: InputMaybe<String_Filter_Operators>;
    password?: InputMaybe<String_Filter_Operators>;
    role?: InputMaybe<Directus_Roles_Filter>;
    status?: InputMaybe<String_Filter_Operators>;
    tags?: InputMaybe<String_Filter_Operators>;
    tfa_secret?: InputMaybe<String_Filter_Operators>;
    theme?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
    _eq?: InputMaybe<Scalars['Float']>;
    _gt?: InputMaybe<Scalars['Float']>;
    _gte?: InputMaybe<Scalars['Float']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    _lt?: InputMaybe<Scalars['Float']>;
    _lte?: InputMaybe<Scalars['Float']>;
    _neq?: InputMaybe<Scalars['Float']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']>;
    _null?: InputMaybe<Scalars['Boolean']>;
};

export type Partition_Elements_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Partition_Elements_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Partition_Elements_Filter>>>;
    collection?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    item?: InputMaybe<String_Filter_Operators>;
    partition_id?: InputMaybe<Partition_Filter>;
};

export type Partition_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Partition_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Partition_Filter>>>;
    elements?: InputMaybe<Partition_Elements_Filter>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
};

export type Project_Staff_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Project_Staff_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Project_Staff_Filter>>>;
    id?: InputMaybe<String_Filter_Operators>;
    role?: InputMaybe<Directus_Roles_Filter>;
    user?: InputMaybe<Directus_Users_Filter>;
};

export type Projects_Courses_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Projects_Courses_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Projects_Courses_Filter>>>;
    courses_id?: InputMaybe<Courses_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    projects_id?: InputMaybe<Projects_Filter>;
};

export type Projects_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Projects_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Projects_Filter>>>;
    courses?: InputMaybe<Projects_Courses_Filter>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    staff?: InputMaybe<Projects_Project_Staff_Filter>;
    user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Projects_Project_Staff_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Projects_Project_Staff_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Projects_Project_Staff_Filter>>>;
    id?: InputMaybe<Number_Filter_Operators>;
    project_staff_id?: InputMaybe<Project_Staff_Filter>;
    projects_id?: InputMaybe<Projects_Filter>;
};

export type String_Filter_Operators = {
    _contains?: InputMaybe<Scalars['String']>;
    _empty?: InputMaybe<Scalars['Boolean']>;
    _ends_with?: InputMaybe<Scalars['String']>;
    _eq?: InputMaybe<Scalars['String']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _ncontains?: InputMaybe<Scalars['String']>;
    _nempty?: InputMaybe<Scalars['Boolean']>;
    _nends_with?: InputMaybe<Scalars['String']>;
    _neq?: InputMaybe<Scalars['String']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']>;
    _nstarts_with?: InputMaybe<Scalars['String']>;
    _null?: InputMaybe<Scalars['Boolean']>;
    _starts_with?: InputMaybe<Scalars['String']>;
};

export type Tasks_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Tasks_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Tasks_Filter>>>;
    checkboxes?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    input?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    radio?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    type?: InputMaybe<String_Filter_Operators>;
};

export type ArtFragment = { __typename?: 'articles', content?: string | null | undefined, id?: string | null | undefined, name?: string | null | undefined, thumbnail?: { __typename?: 'directus_files', id?: string | null | undefined } | null | undefined };

export type QueFragment = { __typename?: 'tasks', name?: string | null | undefined, description?: string | null | undefined, id?: string | null | undefined };

export type Get_TaskQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_TaskQuery = {
    __typename?: 'Query',
    structure?: {
        __typename?: 'courses',
        date_created?: any | null | undefined,
        date_updated?: any | null | undefined,
        description?: string | null | undefined,
        id?: string | null | undefined,
        name?: string | null | undefined,
        status: string,
        elements?: Array<{
            __typename?: 'courses_elements',
            collection?: string | null | undefined,
            item?: {
                __typename?: 'articles',
                content?: string | null | undefined, id?: string | null | undefined, name?: string | null | undefined, thumbnail?: { __typename?: 'directus_files', id?: string | null | undefined } | null | undefined } | { __typename?: 'partition', id?: string | null | undefined, name?: string | null | undefined, elements?: Array<{ __typename?: 'partition_elements', collection?: string | null | undefined, item?: { __typename?: 'articles', content?: string | null | undefined, id?: string | null | undefined, name?: string | null | undefined, thumbnail?: { __typename?: 'directus_files', id?: string | null | undefined } | null | undefined } | { __typename?: 'tasks', name?: string | null | undefined, description?: string | null | undefined, id?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } |
            { __typename?: 'tasks', name?: string | null | undefined,
                description?: string | null | undefined,
                id?: string | null | undefined } | null | undefined
        } | null | undefined> | null | undefined, thumbnail?: { __typename?: 'directus_files', id?: string | null | undefined } | null | undefined
    } | null | undefined
};
