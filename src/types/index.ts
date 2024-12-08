import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  isBold?: boolean;
}

type ISelectItem = {
  value: string;
  label: string;
};
export type ISortState = {
  field: string;
  order: "asc" | "desc";
};

export interface ISharedFilters {
  selectItems: ISelectItem[];
  onSearchClick: (val: string) => void;
  setSort: (sort: ISortState) => void;
  sort: ISortState;
}
export type IITColumn = {
  label: string;
  field: string;
  className?: string;
};

export interface IInternalTable<T = any> {
  caption?: string;
  columns: IITColumn[];
  data: T[];
  renderDataItem: (item: T, index: number, columns: IITColumn[]) => ReactNode;
  className?: string;
  isCards?: boolean;
}

type GenericRolePermission = {
  name: string;
  description: string;
};

// Roles
export type IRole = GenericRolePermission;
//Permission
export type IPermission = GenericRolePermission;

// Users
export interface IUser {
  name: string;
  username: string;
  email: string;
  role?: string;
}
// Projects
export interface IProject {
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: number;
  progress: number;
}
export interface ILog {
  action: string;
  description: string;
  role: string;
  ipAddress: string;
  method: string;
  endpoint: string;
  statusCode: number;
  responseTime: string;
  stack: string;
  userAgent: string;
  user: string;
}

export interface ISidebar {
  minimizeSidebar: boolean;
  setMinimizeSidebar: Dispatch<SetStateAction<boolean>>;
}

export interface ITableCellActions {
  itemId: string;
  editURL?: string;
  editOnClick?: (itemId: string) => void;
  deleteOnClick?: (itemId: string) => void;
}

type IRenderItem<T> = {
  item: T;
  index: number;
  columns?: IITColumn[];
  className?: string;
  noActions?: boolean;
};

export type IUserRenderItem = IRenderItem<IUser>;
export type IProjectRenderItem = IRenderItem<IProject>;
export type IPermissionRenderItem = IRenderItem<IPermission>;
export type IRoleRenderItem = IRenderItem<IRole>;
export type ILogRenderItem = IRenderItem<ILog>;

export interface IOverviewDataCard<T = any> {
  title: string;
  className?: string;
  columns: IITColumn[];
  data: T[];
  renderDataItem: (props: IRenderItem<T>) => ReactNode;
}

export interface IDetailsPage {
  params: { id: string };
}

export interface ILink {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  icon?: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "custom";
  children: ReactNode;
  href: string;
}

export interface IDeleteActionDrawer {
  itemId: string;
  children: ReactNode;
  onDelete?: (id: string) => void;
}

export interface IUseDevice {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export * from "./home";
