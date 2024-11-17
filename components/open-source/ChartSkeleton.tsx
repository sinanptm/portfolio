import { memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";


const ChartSkeleton = () => (
    <div className="flex-1 space-y-4">
        <div className="text-center space-y-2">
            <Skeleton className="h-6 w-40 mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
        </div>
        <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            <Skeleton className="absolute inset-0 rounded-full" />
            <Skeleton className="absolute inset-[20%] rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-20" />
            ))}
        </div>
    </div>
);


export const GraphSkeleton = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-[200px] w-full" />
            </CardContent>
        </Card>
    );
};

export default memo(ChartSkeleton);