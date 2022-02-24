import OriginListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

export type ListGroupProps = typeof OriginListGroup & {
  Item: typeof ListGroupItem;
};

const ListGroup = OriginListGroup as ListGroupProps;

ListGroup.Item = ListGroupItem;

export default ListGroup;
