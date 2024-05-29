// import { Separator } from '../../UI/molecules/Separator/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';

interface HistoryCardProps {
  headerText?: string;
  subText?: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ headerText, subText }) => (
  <Card className="overflow-hidden">
    <CardHeader className="flex flex-row items-start bg-muted/50">
      <div className="grid gap-0.5">
        <CardTitle className="group flex items-center gap-2 text-lg">
          {headerText}
        </CardTitle>
        <CardDescription>{subText}</CardDescription>
      </div>
    </CardHeader>

    <CardContent className="p-6 text-sm">
      <div className="grid gap-3">
        <div className="font-semibold">Order Details</div>
        <ul className="grid gap-3">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Glimmer Lamps x<span>2</span>
            </span>
            <span>$250.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Aqua Filters x<span>1</span>
            </span>
            <span>$49.00</span>
          </li>
        </ul>
        <ul className="grid gap-3">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$299.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>$5.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>$25.00</span>
          </li>
          <li className="flex items-center justify-between font-semibold">
            <span className="text-muted-foreground">Total</span>
            <span>$329.00</span>
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default HistoryCard;
