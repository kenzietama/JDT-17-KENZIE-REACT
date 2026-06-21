import Box from "../../components/box";
import { Flex, Heading, Text, Container } from "@radix-ui/themes";

const Index = () => {
	const Experience = [
		{
			title: "PT Indivara Group",
			desc: "Frontend Developer yang mengerjakan 3 Aplikasi Wealth Management System",
		},
		{
			title: "PT Suka Group",
			desc: "Backend Developer yang mengerjakan 3 Aplikasi Distribution Management System",
		},
	];

	return (
		<Container size="3" p="4">
			<Flex direction="column" align="center" gap="6" mt="10">
				<Flex direction="column" align="center" gap="2" className="text-center">
					<Heading size="8" style={{ color: "var(--accent-11)" }}>
						Welcome to My Portfolio
					</Heading>
					<Text size="3" color="gray" style={{ maxWidth: "500px" }}>
						Explore my journey, experience, and the latest movie collections on this platform.
					</Text>
				</Flex>

				<Flex direction="row" gap="6" wrap="wrap" justify="center" mt="4">
					{Experience.map((el, index) => (
						<Box key={index} title={el.title} desc={el.desc} index={index} />
					))}
				</Flex>
			</Flex>
		</Container>
	);
};

export default Index;

