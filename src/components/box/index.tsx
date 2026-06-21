import { Card, Heading, Text, Flex } from "@radix-ui/themes";

const Index = ({
	title,
	desc,
	index,
}: {
	title: string;
	desc: string;
	index: number;
}) => {
	return (
		<Card
			size="3"
			style={{
				width: "18rem",
				height: "18rem",
			}}
			className="flex flex-col justify-between"
		>
			<Flex direction="column" gap="3" height="100%">
				<Flex direction="column" gap="2">
					<Heading size="4">{title}</Heading>
				</Flex>

				<Text
					size="2"
					style={{
						flexGrow: 1,
						marginTop: "0.5rem",
					}}
				>
					{desc}
				</Text>
			</Flex>
		</Card>
	);
};

export default Index;
