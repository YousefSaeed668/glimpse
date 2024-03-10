export const Participants = () => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md h-12">
      List of Users
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md h-12 w-[100px]" />
  );
};
