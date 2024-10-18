import {
  BatchWriteItemCommand,
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  QueryCommandOutput,
  ReturnValue,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  TransactWriteItemsCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

import { ResourceNotFoundError } from '@errors/resource-not-found-error';
import { logger } from '@shared';

const dynamoDb = new DynamoDBClient({});

interface KeySchema {
  pk: string;
  sk?: string;
}

// Example usage:
// const user: User = await getById<User>({ pk: userId, sk: optionalSortKey }, "users");
export async function getById<T>(
  keys: KeySchema,
  tableName: string
): Promise<T> {
  const keyParams: { [key: string]: any } = {
    pk: { S: keys.pk },
  };

  if (keys.sk) {
    keyParams['sk'] = { S: keys.sk };
  }

  const params = {
    TableName: tableName,
    Key: keyParams,
  };

  try {
    const data = await dynamoDb.send(new GetItemCommand(params));

    if (!data.Item) {
      throw new ResourceNotFoundError(
        `Item with keys PK: ${keys.pk}, SK: ${keys.sk} not found`
      );
    }

    const item = unmarshall(data.Item) as T;

    console.log(
      `Item with PK: ${keys.pk}, SK: ${keys.sk} retrieved successfully`
    );

    return item;
  } catch (error) {
    console.error('Error retrieving item:', error);
    throw error;
  }
}
// Example usage:
// const upsertedUser: User = await upsert<User>(newUser, "users", "user123");
export async function upsert<T>(
  newItem: T,
  tableName: string,
  id: string
): Promise<T> {
  const params = {
    TableName: tableName,
    Item: marshall(newItem),
  };

  try {
    await dynamoDb.send(new PutItemCommand(params));

    logger.info(`item created with ID ${id} into ${tableName}`);

    return newItem;
  } catch (error) {
    console.error('error creating item:', error);
    throw error;
  }
}

// Example usage:
// await deleteById({ pk: userIdToDelete, sk: optionalSortKey }, "users");
export async function deleteById(
  keys: KeySchema,
  tableName: string
): Promise<void> {
  const keyParams: { [key: string]: any } = {
    pk: { S: keys.pk },
  };

  if (keys.sk) {
    keyParams['sk'] = { S: keys.sk };
  }

  const params = {
    TableName: tableName,
    Key: keyParams,
  };

  try {
    await dynamoDb.send(new DeleteItemCommand(params));

    console.log(
      `Item with PK: ${keys.pk}, SK: ${keys.sk} deleted successfully`
    );
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
}

// Example usage:
// const updatedUser: User = await updateById<User>(
//     { pk: "user123", sk: "2023-10-17" },
//     "users",
//     {
//         name: "John Doe",
//         age: 30
//     }
// );
export async function updateById<T>(
  keys: KeySchema,
  tableName: string,
  updatedItem: Partial<T>
): Promise<T> {
  const keyParams: { [key: string]: any } = {
    pk: { S: keys.pk },
  };

  if (keys.sk) {
    keyParams['sk'] = { S: keys.sk };
  }

  const updateExpression =
    'SET ' +
    Object.keys(updatedItem)
      .map((key) => `#${key} = :${key}`)
      .join(', ');

  const expressionAttributeNames = Object.keys(updatedItem).reduce(
    (acc, key) => ({ ...acc, [`#${key}`]: key }),
    {}
  );

  const expressionAttributeValues = marshall(
    Object.keys(updatedItem).reduce(
      (acc, key) => ({
        ...acc,
        [`:${key}`]: (updatedItem as Record<string, any>)[key],
      }),
      {}
    )
  );

  const params = {
    TableName: tableName,
    Key: keyParams,
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: ReturnValue.ALL_NEW,
  };

  try {
    const data = await dynamoDb.send(new UpdateItemCommand(params));

    if (!data.Attributes) {
      throw new ResourceNotFoundError(
        `Item with keys PK: ${keys.pk}, SK: ${keys.sk} not found`
      );
    }

    const updatedData = unmarshall(data.Attributes) as T;

    console.log(
      `Item with PK: ${keys.pk}, SK: ${keys.sk} updated successfully`
    );

    return updatedData;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
}

// Example usage:
// const { items, lastEvaluatedKey: newLastEvaluatedKey } = await list<User>(
//     tableName,
//     pageSize,
//     { pk: "user123", sk: "2023-10-17" }
// );
export async function list<T>(
  tableName: string,
  pageSize: number,
  lastEvaluatedKey?: KeySchema
): Promise<{ items: T[]; lastEvaluatedKey?: KeySchema }> {
  const exclusiveStartKey: Record<string, any> | undefined = lastEvaluatedKey
    ? marshall({
        pk: lastEvaluatedKey.pk,
        ...(lastEvaluatedKey.sk && { sk: lastEvaluatedKey.sk }),
      })
    : undefined;

  const params = {
    TableName: tableName,
    Limit: pageSize,
    ExclusiveStartKey: exclusiveStartKey,
  };

  try {
    const data: QueryCommandOutput = await dynamoDb.send(
      new QueryCommand(params)
    );

    const items: T[] = data.Items
      ? data.Items.map((item) => unmarshall(item) as T)
      : [];

    const newLastEvaluatedKey = data.LastEvaluatedKey
      ? (unmarshall(data.LastEvaluatedKey) as KeySchema)
      : undefined;

    console.log(`retrieved ${items.length} items from ${tableName}`);

    return { items, lastEvaluatedKey: newLastEvaluatedKey };
  } catch (error) {
    console.error('error listing items:', error);
    throw error;
  }
}

// Example usage:
// const allUsers: User[] = await getAll<User>("users");
export async function getAll<T>(tableName: string): Promise<T[]> {
  const allItems: T[] = [];
  let lastEvaluatedKey: Record<string, any> | undefined;
  let params: ScanCommandInput = {
    TableName: tableName,
  };

  do {
    if (lastEvaluatedKey) {
      params = {
        ...params,
        ExclusiveStartKey: lastEvaluatedKey,
      };
    }

    try {
      const data: ScanCommandOutput = await dynamoDb.send(
        new ScanCommand(params)
      );

      const items: T[] = data.Items
        ? data.Items.map((item) => unmarshall(item) as T)
        : [];

      allItems.push(...items);
      lastEvaluatedKey = data.LastEvaluatedKey;
    } catch (error) {
      console.error('Error scanning table:', error);
      throw error;
    }
  } while (lastEvaluatedKey);

  logger.info(`retrieved ${allItems.length} items from ${tableName}`);
  return allItems;
}

// Example usage:
// await transaction("users", [
//     {
//         action: "put",
//         item: newUser,
//         key: { pk: "user123", sk: "2023-10-17" }
//     },
//     {
//         action: "delete",
//         key: { pk: "user456" }
//     }
// ]);
export async function transaction<T>(
  tableName: string,
  actions: Array<{
    action: 'put' | 'delete';
    item?: T;
    key: KeySchema;
  }>
): Promise<void> {
  const transactItems = actions.map((actionItem) => {
    const keyParams: Record<string, any> = {
      pk: { S: actionItem.key.pk },
    };

    if (actionItem.key.sk) {
      keyParams['sk'] = { S: actionItem.key.sk };
    }

    return {
      [actionItem.action === 'put' ? 'Put' : 'Delete']: {
        TableName: tableName,
        ...(actionItem.action === 'put' && { Item: marshall(actionItem.item) }),
        Key: keyParams,
      },
    };
  });

  const params = {
    TransactItems: transactItems,
  };

  try {
    await dynamoDb.send(new TransactWriteItemsCommand(params));
    console.info(`transaction completed successfully`);
  } catch (error) {
    console.error('error executing transaction:', error);
    throw error;
  }
}

// Example usage:
// await batch("users", [
//   { pk: "user123", sk: "2023-10-17", name: "John Doe", age: 30 },
//   { pk: "user456", name: "Jane Smith", age: 25 },
// ], 25);
export async function batch<T extends KeySchema>(
  tableName: string,
  items: T[],
  batchSize: number
): Promise<void> {
  const batches = [];

  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    const params = {
      RequestItems: {
        [tableName]: batch.map((item) => ({
          PutRequest: {
            Item: marshall(item),
          },
        })),
      },
    };

    try {
      await dynamoDb.send(new BatchWriteItemCommand(params));
      console.info(`batch of ${batch.length} items completed successfully`);
    } catch (error) {
      console.error('error executing batch:', error);
      throw error;
    }
  }
}
